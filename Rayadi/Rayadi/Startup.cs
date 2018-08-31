using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;

namespace Rayadi
{
	public class Startup
	{

		//public Startup(IConfigurationRoot configuration)
		//{
		//	Configuration = configuration;
		//}

		//public IConfigurationRoot Configuration { get;  }

		// This method gets called by the runtime. Use this method to add services to the container.
		// For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
		public void ConfigureServices(IServiceCollection services)
		{
			//services.AddDbContext<ApplicationDbContext>( options => 
			//options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"))
			//	);

			//services.AddIdentity<ApplicationUser, IdentifyRole>()
			//	.AddEntityFrameworkStores<ApplicationDbContext>()
			//	.AddDefaultTokenProviders();

			services.AddMvc();

			//services.AddTransient<>(IEmailSender, AuthMessageSender);
			//services.AddTransient<>(ISmsSender, AuthMessageSender);
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				//app.UseBrowserLink();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
			}

			//No secure
			app.UseStaticFiles();

			//app.UseStaticFiles(new StaticFileOptions()
			//{
			//	FileProvider = new PhysicalFileProvider(
			//		Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot\MyArchive")),
			//	RequestPath = new PathString("/Archive")
			//}
			//	);

			//app.Run(async (context) =>
			//{
			//	await context.Response.WriteAsync("Hello World!");
			//});

			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller=Home}/{Action=Index}/{id?}"
					);
			}
				);
		}
	}
}
