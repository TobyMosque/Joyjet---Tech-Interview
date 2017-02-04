using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Joyjet.TechIterview.BackEnd.WebAPI.Models
{
    [DataContract(Name = "eligible_transaction_volume")]
    public class EligibleTransactionVolume
    {
        [DataMember(Name = "min_price", Order = 1)]
        public int MinPrice { get; set; }

        [DataMember(Name = "max_price", Order = 1)]
        public int? MaxPrice { get; set; }
    }
}