using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hi5.BusStopAssistant.Models
{
	public class Prediction
	{
		public BusStop BusStop { get; set; }
		public BusLine BusLine { get; set; }
		public int[] MinutesToArrive { get; set; }
	}
}
