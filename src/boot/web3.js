import { boot } from "quasar/wrappers";
import Web3 from "web3/dist/web3.min.js";
import detectEthereumProvider from "@metamask/detect-provider";
import { Dialog } from "quasar";

export default boot(async ({ app }) => {
  const provider = await detectEthereumProvider();
  if (provider) {
    /* This method open Metamaks before run your app */
    await provider.enable();
    /* Use this.$web3 in components */
    const web3 = new Web3(provider);
    app.config.globalProperties.$web3 = web3;
    console.log("Conectado", provider);
  } else {
    console.log("Please install MetaMask!");
    Dialog.create({ title: "Alert", message: "Please install MetaMask!" });
  }
});
