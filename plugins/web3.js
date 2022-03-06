import {init} from '~/api/web3'

export default async function (context) {
  if(!process.server) {
    await init(context.$axios)
  }
}
