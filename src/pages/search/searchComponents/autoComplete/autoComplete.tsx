import  { ChangeEvent, useEffect, useState } from 'react'
import { useDebounce } from '../../../../hooks/useDebounce';
import Suggestions from '../suggestions/suggestions';
import style from "./autoComplete.module.scss"
import SvgWrapper from '../../../../components/header/helpers/svgWrapper';
import { CloseIcon } from '../../../../svgs/allSvgs';
import axios from 'axios';

interface IAutocomplete {
  assignCurrentSug: (e: any) => void
  type: "from" | "to"
  deleteCurrentSug: (currentSug: any) => void,
  fetchSugUrl: string
  label?: string,
  debounceTime?: number,
  queryParamName?: string
}


export interface ItemResult {
  title: { text: string };
  tags: string[];
  distance: { value: number, text: string };
  type: "to" | "from"
}

export interface IResult {
  results: ItemResult[]
}

export default function AutoComplete({ assignCurrentSug, type, deleteCurrentSug,
  fetchSugUrl, label, debounceTime = 800, queryParamName = "text", }: IAutocomplete) {

  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<ItemResult[]>([]);
  const [currentSug, setCurrentSug] = useState<ItemResult| null>(null);
  const debounceFunction = useDebounce(fetch, debounceTime);

  useEffect(()=> {
    const removeSuggestions = (event:MouseEvent) => {
      event.stopPropagation()
      const target = event?.target as Element;
      const isHideSug = target.closest("#container, #ulId");
      if(isHideSug) {
        return;
      }
      if(!currentSug) {
        console.log()
        setSuggestions([])
        setInput("")
      }
     }

     document.addEventListener('click', removeSuggestions);

    return ()=> {
      document.removeEventListener('click', removeSuggestions);
    }
  }, [currentSug])

  async function fetch(input: string) {
    try {
      if (input.length >= 3) {
        const res = await axios.get<IResult>(fetchSugUrl, { params: { [queryParamName]: input } })
        setSuggestions(res.data.results?? [])
      }
    }
    catch (err) {
      console.log(err)
    }

  }
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
    if(!event.target.value && suggestions?.length >0) {
      setSuggestions([])
      return
    }
    debounceFunction(event.target.value);
  }

  const clickElem = (item: ItemResult) => {
    assignCurrentSug({ ...item, type })
    setCurrentSug(item);
    setInput(item.title.text);
    setSuggestions([])
  }

  const onDelete = () => {
    if(!currentSug) {
      return
    }
    deleteCurrentSug(currentSug)
    setCurrentSug(null);
    setInput("");
  }

  console.log("suggestions", suggestions)

  return (
    <div id="container" className={style.box}>
      <div className={style.input}>
        <label>{label ?? ""}:</label>
        <input value={input} onChange={onChange}></input>
        {currentSug && <div className={style.wrapper}>
          <SvgWrapper onDelete={onDelete} size={15}>
            <CloseIcon color='green'/>
          </SvgWrapper>
        </div>}
      </div>
      {suggestions.length > 0 && <div id="ulId"><Suggestions clickElem={clickElem} suggestions={suggestions} /></div>}
    </div>
  )
}
