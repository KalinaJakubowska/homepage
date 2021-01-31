import { takeLatest, put, call } from "redux-saga/effects";
import { getApiData } from "./getApiData";
import {
  fetchGithubProjects,
  fetchGithubProjectsError,
  fetchGithubProjectsSuccess,
} from "./githubSlice";
import { apiLink } from "./common/personalInfo";

function* fetchGithubProjectsHandler() {
  try {
    const githubData = yield call(getApiData, apiLink);
    yield put(fetchGithubProjectsSuccess(githubData));
  } catch (error) {
    yield put(fetchGithubProjectsError(error));
  }
}

export function* watchFetchGithubProjects() {
  yield takeLatest(fetchGithubProjects.type, fetchGithubProjectsHandler);
}
