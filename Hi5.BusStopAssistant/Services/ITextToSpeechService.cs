using Google.Cloud.TextToSpeech.V1;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Hi5.BusStopAssistant.Services
{
	public interface ITextToSpeechService
	{
		Stream Test(string text, string language = "en-US");
	}
}
