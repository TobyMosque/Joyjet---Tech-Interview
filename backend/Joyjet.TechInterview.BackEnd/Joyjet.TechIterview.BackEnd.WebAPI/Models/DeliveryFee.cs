using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Joyjet.TechIterview.BackEnd.WebAPI.Models
{
    [DataContract(Name = "delivery_fee")]
    public class DeliveryFee
    {
        [DataMember(Name = "eligible_transaction_volume", Order = 1)]
        public EligibleTransactionVolume EligibleTransactionVolume { get; set; }

        [DataMember(Name = "price", Order = 2)]
        public int Price { get; set; }
    }
}