using Joyjet.TechIterview.BackEnd.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Joyjet.TechIterview.BackEnd.WebAPI.Controllers
{
    public class CartController : ApiController
    {
        //Calculating the discount value to each article (Tech Interview Level 3).
        private int CalcDiscount(int price, int quantity, Discount discount)
        {
            var value = discount?.Value ?? 0;
            if (discount != null && discount.Type == DiscountType.Percentage)
            {
                var percentage = (decimal)discount.Value / 100;
                value = (int)Math.Ceiling(price * percentage);
            }
            return quantity * value;
        }

        [HttpPost]
        public ResponseModel ProcessCarts(RequestModel request)
        {
            // Indexing Articles to easely search for Prices and Discounts (Tech Interview Level 1 and 3);
            var articles = (
                from article in request.Articles
                join discount in request.Discounts on article.ArticleID equals discount.ArticleID into discounts
                from discount in discounts.DefaultIfEmpty()
                select new {
                    ArticleID = article.ArticleID,
                    Price = article.Price,
                    Discount = discount
                }).ToDictionary(x => x.ArticleID, x => x);

            var response = new ResponseModel();
            response.Carts = new List<Cart>();
            foreach (var cart in request.Carts)
            {                
                var outputCart = new Cart();
                outputCart.CartID = cart.CartID;
                outputCart.Total = cart.Itens.Sum(item => {
                    //Calculating the total value of the cart (Tech Interview Level 1).
                    var article = articles[item.ArticleID];
                    var total = item.Quantity * article.Price;

                    //Applying the discount when elligible (Tech Interview Level 3).
                    total -= CalcDiscount(article.Price, item.Quantity, article.Discount);
                    return total;
                });

                // Checking for Delivery Fees (Tech Interview Level 2)
                if (request.DeliveryFees != null && request.DeliveryFees.Count > 0)
                {
                    outputCart.Total += request.DeliveryFees.Where(x =>
                    {
                        var min = x.EligibleTransactionVolume.MinPrice;
                        var max = x.EligibleTransactionVolume.MaxPrice ?? Int32.MaxValue;
                        return outputCart.Total >= min && outputCart.Total < max;
                    }).Select(x => x.Price).DefaultIfEmpty(0).First();
                }
                response.Carts.Add(outputCart);
            }
            return response;
        }
    }
}
