const { expect } = require("chai");
const { ethers } = require("hardhat");

async function deployTokenFixture() {
  const NVMToken = await ethers.getContractFactory("NVMToken");

  const [
    alice,
    bob,
    carl,
  ] = await ethers.getSigners();

  const initialDistribution = [
    [alice.address, ethers.parseUnits("20", 18)],
    [bob.address, ethers.parseUnits("30", 18)],
    [carl.address, ethers.parseUnits("50", 18)],
  ];

  const NVMTokenContract = await NVMToken.deploy(initialDistribution);
  await NVMTokenContract.waitForDeployment();

  return {
    NVMTokenContract,
    initialDistribution,

    alice,
    bob,
    carl,
  };
}

module.exports = {
  deployTokenFixture,
};