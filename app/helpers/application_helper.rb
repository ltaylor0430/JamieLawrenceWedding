module ApplicationHelper
	#Returns the full title on a per-page basis.
	def full_title(page_title)
		base_title = "Jamie Harrison and Lawrence Taylor"
		if page_title.empty?
			base_title
		else
			"#{base_title} | #{page_title}"
		end
	end
	def getContainerId(page_title) 
		if (page_title.empty? || page_title != 'Hotels')
			'contentBg'
		else  
			'hotel'
		end
	end
	def getBodyClass(page_title) 
		return "hotel" if page_title == 'Hotels'
			
		
	end
	def is_active(*links)  
   		links.each { |link| return "active" if params[:action] == link }
 	end
end
