﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Joyjet.TechIterview.BackEnd.Tests.Resources {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "4.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    internal class Level3 {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal Level3() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("Joyjet.TechIterview.BackEnd.Tests.Resources.Level3", typeof(Level3).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to {
        ///  &quot;articles&quot;: [
        ///    { &quot;id&quot;: 1, &quot;name&quot;: &quot;water&quot;, &quot;price&quot;: 100 },
        ///    { &quot;id&quot;: 2, &quot;name&quot;: &quot;honey&quot;, &quot;price&quot;: 200 },
        ///    { &quot;id&quot;: 3, &quot;name&quot;: &quot;mango&quot;, &quot;price&quot;: 400 },
        ///    { &quot;id&quot;: 4, &quot;name&quot;: &quot;tea&quot;, &quot;price&quot;: 1000 },
        ///    { &quot;id&quot;: 5, &quot;name&quot;: &quot;ketchup&quot;, &quot;price&quot;: 999 },
        ///    { &quot;id&quot;: 6, &quot;name&quot;: &quot;mayonnaise&quot;, &quot;price&quot;: 999 },
        ///    { &quot;id&quot;: 7, &quot;name&quot;: &quot;fries&quot;, &quot;price&quot;: 378 },
        ///    { &quot;id&quot;: 8, &quot;name&quot;: &quot;ham&quot;, &quot;price&quot;: 147 }
        ///  ],
        ///  &quot;carts&quot;: [
        ///    {
        ///      &quot;id&quot;: 1,
        ///      &quot;items&quot;: [
        ///        { &quot;article_id&quot;: 1, &quot;quantity [rest of string was truncated]&quot;;.
        /// </summary>
        internal static string data {
            get {
                return ResourceManager.GetString("data", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to {
        ///  &quot;carts&quot;: [
        ///    {
        ///      &quot;id&quot;: 1,
        ///      &quot;total&quot;: 2350
        ///    },
        ///    {
        ///      &quot;id&quot;: 2,
        ///      &quot;total&quot;: 1775
        ///    },
        ///    {
        ///      &quot;id&quot;: 3,
        ///      &quot;total&quot;: 1798
        ///    },
        ///    {
        ///      &quot;id&quot;: 4,
        ///      &quot;total&quot;: 1083
        ///    },
        ///    {
        ///      &quot;id&quot;: 5,
        ///      &quot;total&quot;: 1196
        ///    }
        ///  ]
        ///}.
        /// </summary>
        internal static string output {
            get {
                return ResourceManager.GetString("output", resourceCulture);
            }
        }
    }
}
