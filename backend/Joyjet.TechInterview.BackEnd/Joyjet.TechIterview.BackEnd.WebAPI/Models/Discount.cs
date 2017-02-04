using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Joyjet.TechIterview.BackEnd.WebAPI.Models
{
    [DataContract(Name = "discount")]
    public class Discount
    {
        [DataMember(Name = "article_id", Order = 1)]
        public int ArticleID { get; set; }

        [DataMember(Name = "type", Order = 2)]
        public DiscountType Type { get; set; }

        [DataMember(Name = "value", Order = 3)]
        public int Value { get; set; }
    }
}