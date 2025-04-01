import axios from "axios"
import { IResult } from "../pages/search/searchComponents/autoComplete/autoComplete"

export class SuggestService {
   static async fetch(input: string, fetchSugUrl: string, queryParamName:string) {
        try {
          if (input.length >= 3) {
            const res = await axios.get<IResult>(fetchSugUrl, { params: { [queryParamName]: input } })
            return res.data.results?? []
          }
        }
        catch (err) {
          console.log(err)
        }

      }
}

