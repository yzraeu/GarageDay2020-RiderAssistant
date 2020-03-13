using System.Collections.Generic;

namespace Hi5.BusStopAssistant.Models
{
	public class FakeRepository
	{

		public List<Prediction> GetPredictions()
		{
			var busStop1 = new BusStop() { Number = 52483 };
			var busLine1 = new BusLine() { Line = "105", Name = "Uptown/New Westminster Station" };
			var busLine2 = new BusLine() { Line = "128", Name = "Braid Stn/22nd Street Stn" };

			var prediction1 = new Prediction() { BusStop = busStop1, BusLine = busLine1, MinutesToArrive = new[] { 32, 62, 92 } };
			var prediction2 = new Prediction() { BusStop = busStop1, BusLine = busLine2, MinutesToArrive = new[] { 25, 45, 65, 85 } };

			var output = new List<Prediction>() { prediction1, prediction2 };
			return output;
		}
	}
}
