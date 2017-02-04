using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Joyjet.TechIterview.BackEnd.WebAPI.Models
{
    [DataContract(Name = "item")]
    public class CartItem
    {
        [DataMember(Name = "article_id", Order = 1)]
        public int ArticleID { get; set; }

        [DataMember(Name = "quantity", Order = 2)]
        public int Quantity { get; set; }
    }
}