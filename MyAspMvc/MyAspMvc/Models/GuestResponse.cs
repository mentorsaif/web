using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace MyAspMvc.Models
{
	public class GuestResponse
	{
		[Required(ErrorMessage = "Please enter your name")]
		public string Name { get; set; }

		[Required(ErrorMessage = "Please enter your email address")]
		[RegularExpression(@"^(?("")("".+?(?<!\\)""@)|(([0-9a-z]((\.(?!\.))|[-!#\$%&'\*\+/=\?\^`\{\}\|~\w])*)(?<=[0-9a-z])@))(?(\[)(\[(\d{1,3}\.){3}\d{1,3}\])|(([0-9a-z][-0-9a-z]*[0-9a-z]*\.)+[a-z0-9][\-a-z0-9]{0,22}[a-z0-9]))$", ErrorMessage ="Please enter a valid email address")]
		public string Email { get; set; }

		[Required(ErrorMessage = "Please enter your phone number")]
		public string Phone { get; set; }

		[Required(ErrorMessage = "Please specify whether you'll attent")]
		public bool? WillAttent { get; set; }
	}
}