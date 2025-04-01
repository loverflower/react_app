import { useState } from "react"
import AutoComplete, { ItemResult } from "./searchComponents/autoComplete/autoComplete"
import Button from "./searchComponents/button"
import style from "./searchContainer.module.scss"

const SearchContainer = () => {
  const [suggestions, setSuggestions] = useState<ItemResult[]>([])

  const changeSug = (suggestion: ItemResult) => {
    const index = suggestions.findIndex(x => x.type === suggestion.type)
    if (index === -1) {
      setSuggestions([...suggestions, suggestion])
    }
    else {
      suggestions.splice(index, 1)
      setSuggestions([...suggestions, suggestion])
    }
  }

  const deleteSug = (sug: ItemResult) => {
    const suggestionsFiltered = suggestions.filter(x => x.title.text !== sug.title.text);
    setSuggestions(suggestionsFiltered)
  }

  return (
   <>
    <div className={style.box}>
      <AutoComplete fetchSugUrl={process.env.REACT_APP_API_SUGGEST!} label="From" deleteCurrentSug={deleteSug} assignCurrentSug={changeSug} type="from" />
      <AutoComplete fetchSugUrl={process.env.REACT_APP_API_SUGGEST!} label="To" deleteCurrentSug={deleteSug} assignCurrentSug={changeSug} type="to" />
      <Button disabled={suggestions.length !== 2} />
    </div>
    </>
  )
}

export default SearchContainer
