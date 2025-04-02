const hre = require("hardhat");
const { ethers } = require("hardhat");

// const NVMTokenArgs = require("./args/NVMToken");

console.log("Network: %s", hre.network.name);


async function main() {

  const [owner, account1, account2, account3] = await ethers.getSigners();

  const args = [
    [account1.address, ethers.parseUnits("20", 18)],
    [account2.address, ethers.parseUnits("30", 18)],
    [account3.address, ethers.parseUnits("50", 18)],
  ]

  console.log("ARGUMENTS: ", args);

  console.log("Owner address: ", owner.address);
  console.log("balance: ", ethers.formatEther(await hre.ethers.provider.getBalance(owner.address)));

  const NVMToken = await ethers.getContractFactory("NVMToken");
  const NVMTokenContract = await NVMToken.deploy(args);
  await NVMTokenContract.waitForDeployment();

  console.log(await NVMTokenContract.balanceOf(account1.address));

  // Summary
  console.log("Tokens 🪙:")
  console.log("NVMTokenContract: --------: ", NVMTokenContract.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
