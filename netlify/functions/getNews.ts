const baseUrl = 'https://api.politie.nl/v4/nieuws'
import axios from 'axios'
import { paramsToQueryParamString } from '@/utils/api-helpers'

export const handler = async (event: any) => {
    try {
        const { data } = await axios.get(baseUrl + paramsToQueryParamString(event.queryStringParameters))
        return { statusCode: 200, body: JSON.stringify(data) }
    }
    catch (error: any) {
        const { status, statusText, headers, data } = error.response
        return {
            statusCode: status,
            body: JSON.stringify({
                status,
                statusText,
                headers,
                data
            })
        }
    }
}
