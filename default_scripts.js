		function toggle_visibility(id)
		{
			var e = document.getElementById(id);
			if(e.style.display != 'none')
			  e.style.display = 'none';
			else
				e.style.display = 'block';
			  
			return false;
		}
		
		function select_from(obj, group)
		{
			var selectee = obj;
			var others = document.getElementsByClassName(group);
		
			for( var i = 0; i < others.length; ++i )
			{
				others[i].style.background = 'transparent';
			}
			
			selectee.style.background = 'white';
							
			return false;
		}
		
		function select_view(obj,view)
		{
			select_from(obj,"viewSelector");
			
			var allViews = document.getElementsByClassName("viewbox");
		
			for( var i = 0; i < allViews.length; ++i )
			{
				allViews[i].style.display = 'none';
			}
			
			var selectedView = document.getElementsByClassName(view);
			
			for( var i = 0; i < selectedView.length; ++i )
			{
				selectedView[i].style.display = 'block';
			}
				
			return false;
		}
		
		function selectFeatured(obj)
		{
			obj.style.color = 'black';
			obj.style.borderBottom = 'solid thin';
			
			var popularButtons = obj.parentNode.getElementsByClassName( "popularButton" );
			popularButtons[0].style.color = "gray";
			popularButtons[0].style.borderBottom = "";
			
			var hidecontent = obj.parentNode.parentNode.getElementsByClassName( "boxcontent popular" );
			for( var i = 0; i < hidecontent.length; ++i )
			{
				hidecontent[i].style.display = 'none';
			}
			
			var showcontent = obj.parentNode.parentNode.getElementsByClassName( "boxcontent featured" );
			for( var i = 0; i < showcontent.length; ++i )
			{
			 showcontent[i].style.display = 'block';
			}
			
			return false;
		}
		
		function selectPopular(obj)
		{
			obj.style.color = 'black';
			obj.style.borderBottom = 'solid thin';
			
			var popularButtons = obj.parentNode.getElementsByClassName( "featuredButton" );
			popularButtons[0].style.color = "gray";
			popularButtons[0].style.borderBottom = "";
			
			var content = obj.parentNode.parentNode.getElementsByClassName( "boxcontent featured" );
			for( var i = 0; i < content.length; ++i )
			{
				content[i].style.display = 'none';
			}
			
			var showcontent = obj.parentNode.parentNode.getElementsByClassName( "boxcontent popular" );
			for( var i = 0; i < showcontent.length; ++i )
			{
				showcontent[i].style.display = 'block';
			}
			
			return false;
		}