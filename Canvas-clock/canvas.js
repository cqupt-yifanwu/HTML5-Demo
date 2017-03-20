window.onload = function () {
	(function clock () {
		var darwing = document.getElementById("darwing");
		function move () {
			var date = new Date()
			var h = date.getHours();
			var m = date.getMinutes();
			var s = date.getSeconds();
			var str = h + ":" + m + ":" + s;

			// 确定浏览器支持<canvas>元素
			if (darwing.getContext) {
				var context = darwing.getContext("2d");
				context.clearRect(0, 0, darwing.width, darwing.height);
				context.beginPath();

				// 绘制外圆和内圆
				context.save()
				context.arc(100, 100, 99, 0, 2*Math.PI, false);
				context.moveTo(194, 100);      // 先把上次结束的点放到内圆上来
				context.arc(100, 100, 94, 0, 2*Math.PI, false);
				context.translate(100, 100);
				context.font = "bold 14px Arial";
				context.textAlign = "center";
				context.Baseline = "middle";
				context.fillText("12", 0, -80);
				context.fillText("6", 0, 80);
				context.fillText("3", 80, 0);
				context.fillText("9", -80, 0);
				context.fillText(str, 0, 50);
				context.fillText("LONGINES", 0, -60);
				context.stroke();
				context.restore();

				// 秒针的运动
				context.save();                 // 将状态保存，放入栈中
				context.fillStyle = "#ff0000";
				context.lineWidth = 1;
				context.translate(100, 100);    // 把此坐标当作相对圆点
				context.beginPath();            // 开始路径
				context.rotate(s*Math.PI/30);   // 秒数×每秒钟在表盘上转的角度就得出现在所处时刻的秒数应有的角度
				context.moveTo(0, 0);
				context.lineTo(0, -85);
				context.stroke();	            // 绘制路径
				context.restore();

				// 分针的运动
				context.save();
				context.lineWidth = 3;
				context.translate(100 ,100);
				context.beginPath();
				context.rotate(m*Math.PI/30);
				context.moveTo(0, 0);
				context.lineTo(0, -75);
				context.stroke();
				context.restore();

				// 时针的运动
				context.save();
				context.lineWidth = 4;
				context.fillStyle = "#ff0000";
				context.fill();
				context.translate(100, 100);
				context.beginPath();
				context.rotate(h*Math.PI/6);
				context.moveTo(0, 0);
				context.lineTo(0, -55);
				context.stroke();
				context.restore();
			}
		}	
		var timer = setInterval(move,1000);		  // 每秒钟重新绘制一次，每秒都会消除上一次的绘制，呈现新绘制的图像
	})()
	
}