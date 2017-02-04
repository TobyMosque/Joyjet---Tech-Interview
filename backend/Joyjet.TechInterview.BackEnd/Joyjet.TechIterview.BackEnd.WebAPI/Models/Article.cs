using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Joyjet.TechIterview.BackEnd.WebAPI.Models
{
    [DataContract(Name = "article")]
    public class Article
    {
        [DataMember(Name = "id", Order = 1)]
        public int ArticleID { get; set; }

        [DataMember(Name = "name", Order = 2)]
        public string Name { get; set; }

        [DataMember(Name = "price", Order = 3)]
        public int Price { get; set; }
    }
}