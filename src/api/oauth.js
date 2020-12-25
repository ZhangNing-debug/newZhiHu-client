import axios from '@/libs/api.request';
export const getGitHubUserInfo = (data) => {
  return axios.request({
    url: '/v1/oauth/githubInfo',
    data,
    method: 'post'
  });
};
