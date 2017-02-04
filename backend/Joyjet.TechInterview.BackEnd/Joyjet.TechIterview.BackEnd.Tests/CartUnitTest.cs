using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Joyjet.TechIterview.BackEnd.WebAPI.Models;
using Newtonsoft.Json;
using Joyjet.TechIterview.BackEnd.WebAPI.Controllers;

namespace Joyjet.TechIterview.BackEnd.Tests
{
    [TestClass]
    public class CartUnitTest
    {
        [TestMethod]
        public void Level1()
        {
            var request = JsonConvert.DeserializeObject<RequestModel>(Resources.Level1.data);
            var response = new CartController().ProcessCarts(request);
            var output = JsonConvert.SerializeObject(response, Formatting.Indented);
            Assert.AreEqual(Resources.Level1.output, output);
        }

        [TestMethod]
        public void Level2()
        {
            var request = JsonConvert.DeserializeObject<RequestModel>(Resources.Level2.data);
            var response = new CartController().ProcessCarts(request);
            var output = JsonConvert.SerializeObject(response, Formatting.Indented);
            Assert.AreEqual(Resources.Level2.output, output);
        }

        [TestMethod]
        public void Level3()
        {
            var request = JsonConvert.DeserializeObject<RequestModel>(Resources.Level3.data);
            var response = new CartController().ProcessCarts(request);
            var output = JsonConvert.SerializeObject(response, Formatting.Indented);
            Assert.AreEqual(Resources.Level3.output, output);
        }
    }
}
