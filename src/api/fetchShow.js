import axios from 'axios'

// fetchShow.js
export const fetchShow = () => {
  return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
     // or res.data, however you want to set that up
     .then(res =>{
     return res
 }).catch(err=> {
 	return err
 })
}
  
 // App.js
// useEffect(() => {
//   fetchShow
//     .then(res => {
//       setSeasons(formatSeasons(res.data._embedded.episodes));
//     }
// }, []);