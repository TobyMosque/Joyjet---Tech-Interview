using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Joyjet.TechIterview.BackEnd.WebAPI.Models
{
    [DataContract(Name = "response")]
    public class ResponseModel
    {
        [DataMember(Name = "carts", EmitDefaultValue = false, Order = 1)]
        public List<Cart> Carts { get; set; }
    }
}