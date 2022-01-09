import axios from 'axios';
import {
  indicatorTransform,
  oneIndicatorToBO,
} from '../../utils/indicatorsTransforms';

const apiEndpoint = 'api/';
const baseURL = 'https://mindicador.cl/';
export const findAllIndicators = () => {
  return axios
    .get(baseURL + apiEndpoint)
    .then(response => {
      return indicatorTransform(response.data);
    })
    .catch(error => {
      console.log(error);
      return {};
    });
};

export const findOneIndicatorByName = name => {
  return axios
    .get(baseURL + apiEndpoint + name)
    .then(response => oneIndicatorToBO(response.data))
    .catch(error => {
      return error.data;
    });
};

const indicatorsApi = {
  findAll: findAllIndicators,
  findOneByName: findOneIndicatorByName,
};

export default indicatorsApi;
