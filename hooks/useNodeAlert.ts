import useSWR from 'swr'
import { fetcher } from './fetcher';
import { NodeAlert } from '../model/node-alert';

export const useNodeAlerts = (apiPort: string): { alerts: NodeAlert[], isLoading: boolean, isError: boolean } => {
  const {data, error, isLoading} = useSWR(`http://${globalThis.window?.location.hostname}:${apiPort}/api/node/alerts`, fetcher)

  return {
    alerts: data,
    isLoading: false,
    isError: false
  }
};
