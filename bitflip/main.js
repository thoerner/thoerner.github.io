Moralis.initialize("y0XK9HSGiNi6eTbf7LTsbitZcgnQtyso5e2EpihU");
Moralis.serverURL = "https://obdecz5i0qqn.grandmoralis.com:2053/server";

init = async () => {
  window.web3 = await Moralis.Web3.enable();
  const user = await Moralis.User.current();
}

login = async () => {
  await Moralis.Web3.authenticate();
  const user = await Moralis.User.current();
}

logout = async () => await Moralis.logOut();

document.getElementById("loginWithMetamask").onclick = login;

init();
