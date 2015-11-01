(function( $ ) {
	$.fn.web_components_ready = function(func) {
		return this.each(function() {
			if(typeof func !== "function")
				throw "invalid function";
			else
				this.addEventListener("WebComponentsReady", func, false);
		});
	};

	$.fn.board_ready = function(func) {
		return this.each(function() {
			if(typeof func !== "function")
				throw "invalid function";
			else
				this.on("ready", func, false);
		});
	};

	$.fn.set_led = function(state) {
		return this.each(function() {
			switch(state) {
				case "on":
					this.on();
					break;
				case "off":
					this.off();
					break;
				case "toggle":
					this.toggle();
					break;
				default:
					throw "invalid led state parameter";
			}
		});
	};
	
	$.fn.set_rgb_color = function(num1, num2, num3) {
		return this.each(function() {
			if(typeof num1 === "number" && typeof num2 === "number" && typeof num3 === "number")
				this.setColor(num1, num2 ,num3);
			else
				throw "invalid set color parameter";
		});
	};

	$.fn.ultrasonic = function(func, millsec) {
		return this.each(function() {
			if(typeof func !== "function")
				throw "invalid function";
			else if(typeof millsec !== "number")
				throw "invalid millsec parameter";
			else
				this.ping(func, millsec);
		});
	};

	$.fn.dht = function(func, millsec) {
		return this.each(function() {
			if(typeof func !== "function")
				throw "invalid function";
			else if(typeof millsec !== "number")
				throw "invalid millsec parameter";
			else
				this.read(func, millsec);
		});
	};
})(jQuery)