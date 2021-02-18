import { Repository } from "../context/user";
import api from "./api";

interface repoInterface {
  id:number
  name:string
  description:string
  forks_count:number
  stargazers_count:number
  language:string
  html_url:string
}

export async function getRepos(username:string) {
  const response = await api.get(`/users/${username}/repos`)
  const repos:Repository[] = response.data.map((repo:repoInterface) => {
    return {
      id:repo.id, 
      name:repo.name, 
      description:repo.description, 
      forks:repo.forks_count, 
      stars: repo.stargazers_count, 
      language:repo.language,
      html_url: repo.html_url
    }
  })
  
  return repos
}