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

        public Post Get(int id)
        {
            using (var db = new AngularJSBlogContext())
            {
                return db.Posts.FirstOrDefault(p =>p.Id == id);
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

        public void Put(Post post)
        {
            if (ModelState.IsValid)
            {
                using (var db = new AngularJSBlogContext())
                {
                    db.Entry<Post>(post).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
            }
        }

        public void Delete(int id)
        {
            using (var db = new AngularJSBlogContext())
            {
                var post = db.Posts.FirstOrDefault(p => p.Id == id);
                if (post != null)
                {
                    db.Posts.Remove(post);
                    db.SaveChanges();
                }
            }
        }
    }
}
