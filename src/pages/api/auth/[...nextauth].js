import Nextauth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default Nextauth({
    providers:[
  GithubProvider({
    clientId: process.env.GITHUB_CLIENT,
    clientSecret: process.env.SECRET_KEY,
  }),
    ],
})