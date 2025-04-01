import { ItemResult } from "../autoComplete/autoComplete";
import SuggestionItem from "../suggesstionItem/suggestionItem"
import style from "./suggestions.module.scss"

interface ISuggestions {
    suggestions :ItemResult[]
    className?: string;
    clickElem: (e:any)=> void
}

export default function Suggestions({suggestions, clickElem}: ISuggestions) {
  return (
    <ul className={style.box}>
     {suggestions.map(item => <SuggestionItem clickElem={clickElem} item={item} key={item.title.text}/>)}
    </ul>
  )
}
