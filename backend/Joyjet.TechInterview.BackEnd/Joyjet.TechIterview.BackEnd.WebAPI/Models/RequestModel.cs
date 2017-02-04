using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Joyjet.TechIterview.BackEnd.WebAPI.Models
{
    [DataContract(Name = "request")]
    public class RequestModel
    {
        [DataMember(Name = "articles", EmitDefaultValue = false, Order = 1)]
        public List<Article> Articles { get; set; }

        [DataMember(Name = "carts", EmitDefaultValue = false, Order = 2)]
        public List<Cart> Carts { get; set; }

        [DataMember(Name = "delivery_fees", EmitDefaultValue = false, Order = 3)]
        public List<DeliveryFee> DeliveryFees { get; set; }

        [DataMember(Name = "discounts", EmitDefaultValue = false, Order = 4)]
        public List<Discount> Discounts { get; set; }
    }
}