using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Joyjet.TechIterview.BackEnd.WebAPI.Models
{
    [DataContract(Name = "cart")]
    public class Cart
    {
        [DataMember(Name = "id", EmitDefaultValue = false, Order = 1)]
        public int CartID { get; set; }

        [DataMember(Name = "items", EmitDefaultValue = false, Order = 2)]
        public List<CartItem> Itens { get; set; }

        [DataMember(Name = "total", EmitDefaultValue = false, Order = 3)]
        public int? Total { get; set; }
    }
}