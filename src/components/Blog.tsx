import React, { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { Calendar, Clock, ArrowRight, X, Heart, Share2, BookOpen, Check } from 'lucide-react';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [likesCount, setLikesCount] = useState<Record<string, number>>({});
  const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<boolean>(false);

  const handleLike = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const currentLikes = likesCount[postId] || 0;
    if (hasLiked[postId]) {
      setLikesCount({ ...likesCount, [postId]: currentLikes - 1 });
      setHasLiked({ ...hasLiked, [postId]: false });
    } else {
      setLikesCount({ ...likesCount, [postId]: currentLikes + 1 });
      setHasLiked({ ...hasLiked, [postId]: true });
    }
  };

  const handleShare = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="blog" className="relative py-24 bg-neutral-950 border-b border-white/5">
      {/* Background radial blurs */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-none bg-blue-500/5 border border-blue-500/30 mb-4 animate-pulse">
            <span className="text-[10px] font-bold text-blue-400 font-mono tracking-[0.2em] uppercase">
              PIXELCRAFT INTEL
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
            MODERN MARKETING <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>INSIGHTS</span>
          </h2>
          <p className="text-white/50 text-base font-light leading-relaxed">
            We actively document our scaling tests, regional SEO parameters, and ad-spend optimization metrics to guide ambitious founders.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => {
            const likes = likesCount[post.id] || Math.floor(post.title.length * 0.4);
            const liked = hasLiked[post.id] || false;
            return (
              <article
                id={`blog-post-card-${post.id}`}
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group relative rounded-none border border-white/10 hover:border-blue-500/30 bg-white/[0.01] hover:bg-white/[0.03] p-6 cursor-pointer transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  {/* Meta items */}
                  <div className="flex items-center justify-between text-xs text-gray-500 font-mono mb-4">
                    <span className="text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-none uppercase tracking-wider">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {post.date}
                      </span>
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-lg font-bold tracking-wider uppercase text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {post.summary}
                  </p>
                </div>

                {/* Footer details */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-gray-500 font-mono">
                  <span className="flex items-center text-gray-400">
                    <Clock className="w-3.5 h-3.5 mr-1 text-blue-500" />
                    {post.readTime}
                  </span>

                  <div className="flex items-center space-x-4">
                    <button
                      id={`like-btn-${post.id}`}
                      onClick={(e) => handleLike(post.id, e)}
                      className={`flex items-center space-x-1 hover:text-red-400 transition-colors focus:outline-none cursor-pointer ${
                        liked ? 'text-red-500' : 'text-gray-500'
                      }`}
                      aria-label="Like post"
                    >
                      <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                      <span>{likes}</span>
                    </button>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center group-hover:text-blue-300 transition-colors">
                      Read <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Blog Detail Reader Modal */}
      {selectedPost && (
        <div
          id="blog-modal-overlay"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            id="blog-reader-body"
            className="w-full max-w-3xl bg-neutral-950 border border-white/10 rounded-none shadow-[0_15px_50px_rgba(0,0,0,0.9)] overflow-y-auto max-h-[90vh] relative p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              id="close-blog-modal"
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-1.5 rounded-none text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Reader Header */}
            <div className="mb-8 pb-6 border-b border-white/10">
              <span className="text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-none uppercase tracking-wider inline-block mb-3">
                {selectedPost.category}
              </span>
              <h3 className="text-2xl font-black uppercase tracking-widest text-white leading-tight">
                {selectedPost.title}
              </h3>
              
              <div className="flex items-center space-x-6 mt-4 text-xs font-mono text-gray-500">
                <span className="flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                  {selectedPost.readTime}
                </span>
                <span className="flex items-center">
                  <BookOpen className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                  PixelCraft Executive Summary
                </span>
              </div>
            </div>

            {/* Typography-optimized Article Content */}
            <div className="space-y-6 text-white/70 text-sm leading-relaxed font-sans font-light">
              {selectedPost.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Reader Footer Share & Actions */}
            <div className="pt-8 border-t border-white/10 mt-10 flex items-center justify-between text-xs text-gray-500 font-mono">
              <span className="italic">
                Written by PixelCraft Research Team
              </span>
              
              <div className="flex items-center space-x-4 animate-fadeIn">
                <button
                  id="reader-share-btn"
                  onClick={handleShare}
                  className="flex items-center space-x-1.5 hover:text-blue-400 transition-colors focus:outline-none cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400 animate-bounce" /> : <Share2 className="w-4 h-4" />}
                  <span>{copied ? 'Copied Link!' : 'Share Article'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
