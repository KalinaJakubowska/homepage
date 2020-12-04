import { watchFetchGithubProjects } from "./githubSaga";

export default function* rootSaga() {
  yield watchFetchGithubProjects();
}
