using AngularJSBlog.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularJSBlog.Data
{
    public class AngularJSBlogContext:DbContext
    {
        public AngularJSBlogContext():base("name=AngularJSBlogConnectionString")
        {

        }

        public DbSet<Post> Posts { get; set; }
    }
}