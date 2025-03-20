import { ref } from 'vue'
import axios from 'axios'

export default function useFetchData(url) {
    let data = ref([])
    let embassaments = ref([])
    axios.get(url)
    .then((response) => {
        data.value = response.data
        for (let i in data.value) {
            if (!embassaments.value.includes(data.value[i].estaci)) {
              console.log('yes')
              embassaments.value.push(data.value[i].estaci)
            }
          }
    })
    .catch((error) => {
        console.error(error)
    })
    return { data,embassaments }

}