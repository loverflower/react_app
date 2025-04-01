import { ItemResult } from "../autoComplete/autoComplete";
import style from "./suggestionItem.module.scss"

interface ISuggestionItem {
    item: ItemResult;
    clickElem: (e:any)=> void
}

export default function SuggestionItem({item, clickElem}: ISuggestionItem) {
  return (
    <li onClick={()=> clickElem(item)} key={item.title.text} className={style.item}>
        <span>{item.title.text}</span>
    </li>
  )
}