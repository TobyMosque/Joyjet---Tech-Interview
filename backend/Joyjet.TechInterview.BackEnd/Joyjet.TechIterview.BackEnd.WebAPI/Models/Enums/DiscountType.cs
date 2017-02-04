using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Joyjet.TechIterview.BackEnd.WebAPI.Models
{
    [DataContract(Name = "type")]
    public enum DiscountType : short
    {
        [EnumMember(Value = "amount")]
        Amount = 1,

        [EnumMember(Value = "percentage")]
        Percentage = 2
    }
}