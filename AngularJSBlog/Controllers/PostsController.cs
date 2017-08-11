using AngularJSBlog.Data;
using AngularJSBlog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularJSBlog.Controllers
{
    public class PostsController : ApiController
    {
        public IList<Post> Get()
        {
            using (var db = new AngularJSBlogContext())
            {
                return db.Posts.ToList();
            }
        }

        public void Post(Post post)
        {
            if (ModelState.IsValid)
            {
                using (var db = new AngularJSBlogContext())
                {
                    db.Posts.Add(post);
                    db.SaveChanges();
                }
            }
        }
    }
}
