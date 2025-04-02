const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const {
  deployTokenFixture
} = require("./testSetup");


describe("NVM Nevermined Token 🪙 ----", function () {
  describe("Deployment", function () {
    it("Test fixture initial distribution is correct.", async function () {
      const {
        NVMTokenContract,
        initialDistribution,
      } = await loadFixture(deployTokenFixture);
      let totalSupply = ethers.parseEther("0");

      for (let i = 0; i < initialDistribution.length; i++) {
        const [address, amount] = initialDistribution[i];
        totalSupply += amount;
        expect(await NVMTokenContract.balanceOf(address)).to.be.equal(amount);
      }

      expect(await NVMTokenContract.totalSupply()).to.be.equal(totalSupply);
    });
  });
});