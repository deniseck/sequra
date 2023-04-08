import { api } from "./config/axiosConfig"

const url = 'events';

export const EventsApi = {
    trackSelectedInstalment: async function (context, type, value) {
        const response = await api.request({
            url: url,
            method: "POST",
            data: {
                context: context,
                type: type,
                selectedInstalment: value
            }
        })
        return response.data;
    },
}


export default EventsApi;