import { takeLatest, put, call } from "redux-saga/effects";
import { getApiData } from "./getApiData";
import {
  fetchGithubProjects,
  fetchGithubProjectsError,
  fetchGithubProjectsSuccess,
} from "./githubSlice";

function* fetchGithubProjectsHandler() {
  try {
    const githubData = yield call(
      getApiData,
      "https://api.github.com/users/KalinaJakubowska/repos?per_page=50"
    );
    yield put(fetchGithubProjectsSuccess(githubData));
  } catch (error) {
    yield put(fetchGithubProjectsError(error));
  }
}

export function* watchFetchGithubProjects() {
  yield takeLatest(fetchGithubProjects.type, fetchGithubProjectsHandler);
}
