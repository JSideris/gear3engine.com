import { drawable3d, Drawable3d, Three } from "g3e-canvas-3d";
import { DeathType, GameObject } from "gear3engine";

interface ControllerModel extends Drawable3d{}

@drawable3d
class ControllerModel extends GameObject{
	mainGroup: Three.Group;
	lThumbstick: Three.Group;
	rThumbstick: Three.Group;
	rTriggerF: Three.Group;
	rTriggerB: Three.Group;
	lTriggerF: Three.Group;
	lTriggerB: Three.Group;
	buttonA: Three.Mesh<Three.CylinderGeometry, Three.MeshToonMaterial>;
	buttonB: Three.Mesh<Three.CylinderGeometry, Three.MeshToonMaterial>;
	buttonX: Three.Mesh<Three.CylinderGeometry, Three.MeshToonMaterial>;
	buttonY: Three.Mesh<Three.CylinderGeometry, Three.MeshToonMaterial>;
	startButton: Three.Mesh<Three.BoxGeometry, Three.MeshToonMaterial>;
	selectButton: Three.Mesh<Three.BoxGeometry, Three.MeshToonMaterial>;
	dPad: Three.Group;
	visibility: number = 0;
	targetVisibility: number = 1;

	constructor(){
		super();

		this.mainGroup = new Three.Group();
		this.addDisplayObject(this.mainGroup);

		// let chassisMaterial = new Three.MeshStandardMaterial({
		let chassisMaterial = new Three.MeshToonMaterial({
			//color: 0x7777ff
			color: 0x666677
		});
		let thumbMaterial = new Three.MeshToonMaterial({color: 0x444455	});

		let pressedButtonMaterial = new Three.MeshToonMaterial({
			color: 0xFFFFFF
		});

		let buttonMaterial0 = new Three.MeshToonMaterial({color: 0x22EE22});
		let buttonMaterial1 = new Three.MeshToonMaterial({color: 0xEE2222});
		let buttonMaterial2 = new Three.MeshToonMaterial({color: 0x2222EE});
		let buttonMaterial3 = new Three.MeshToonMaterial({color: 0xEECC22});
		let buttonMaterial4 = new Three.MeshToonMaterial({color: 0xCCCCCC});

		let centerGroup = new Three.Group();
		let leftGroup = new Three.Group();
		let rightGroup = new Three.Group();
		leftGroup.position.x = -0.3;
		rightGroup.position.x = 0.3;

		let cubeGeometry = new Three.BoxGeometry(1,1,1);
		let cylinderGeometry = new Three.CylinderGeometry(0.5,0.5,1,18, 1);
		let capsuleGeometry = new Three.CapsuleGeometry(0.5, 1, 12, 12);
		let sphereGeometry = new Three.SphereGeometry(0.5, 12, 12);

		{ // Center Group
			let centerChassis = new Three.Mesh(cubeGeometry, chassisMaterial);
			centerChassis.scale.y = 0.25;
			centerChassis.scale.z = 0.15;
			centerChassis.scale.x = 0.6;
			centerGroup.add(centerChassis);

			let startButton = new Three.Mesh(cubeGeometry, thumbMaterial);
			startButton.scale.x = 0.05;
			startButton.scale.y = 0.025;
			startButton.scale.z = 0.015;
			startButton.position.x = 0.05;
			startButton.position.y = -0.025;
			startButton.position.z = 0.1;
			centerGroup.add(startButton);

			let selectButton = new Three.Mesh(cubeGeometry, thumbMaterial);
			selectButton.scale.x = 0.05;
			selectButton.scale.y = 0.025;
			selectButton.scale.z = 0.015;
			selectButton.position.x = -0.05;
			selectButton.position.y = -0.025;
			selectButton.position.z = 0.1;
			centerGroup.add(selectButton);

			this.startButton = startButton;
			this.selectButton = selectButton;
		}

		{ // Left Group
			let leftSurface = new Three.Mesh(cylinderGeometry, chassisMaterial);
			leftSurface.scale.x = 0.4;
			leftSurface.scale.y = 0.2;
			leftSurface.scale.z = 0.4;
			leftSurface.rotation.x = Math.PI / 2;
			leftGroup.add(leftSurface);

			let leftThumbSocket = new Three.Mesh(cylinderGeometry, chassisMaterial);
			leftThumbSocket.scale.x = 0.2;
			leftThumbSocket.scale.y = 0.205;
			leftThumbSocket.scale.z = 0.2;
			leftThumbSocket.position.x = 0.15;
			leftThumbSocket.position.y = -0.15;
			leftThumbSocket.position.z = 0.005;
			leftThumbSocket.rotation.x = Math.PI / 2;
			leftGroup.add(leftThumbSocket);
			
			let leftCapsule = new Three.Mesh(capsuleGeometry, chassisMaterial);
			leftCapsule.scale.x = 0.25;
			leftCapsule.scale.y = 0.2;
			leftCapsule.scale.z = 0.25;
			leftCapsule.position.z = -0.1;
			leftCapsule.position.y = -0.24;
			leftCapsule.position.x = -0.1;
			leftCapsule.rotation.x = 0.5;
			leftCapsule.rotation.z = -Math.PI / 8;
			leftGroup.add(leftCapsule);
			
			{ // Left 1 Trigger
				let triggerGroup = new Three.Group();
				triggerGroup.position.y = 0.16;
				triggerGroup.position.z = 0.05;
				leftGroup.add(triggerGroup);

				let trigger = new Three.Mesh(cubeGeometry, thumbMaterial);
				trigger.position.x = -0.05;
				trigger.scale.x = 0.15;
				trigger.scale.y = 0.1;
				trigger.scale.z = 0.06;
				triggerGroup.add(trigger);

				this.lTriggerF = triggerGroup;
			}
			{ // Left 2 Trigger
				let triggerGroup = new Three.Group();
				triggerGroup.position.y = 0.16;
				triggerGroup.position.z = -0.05;
				leftGroup.add(triggerGroup);

				let trigger = new Three.Mesh(cubeGeometry, thumbMaterial);
				trigger.position.x = -0.05;
				trigger.scale.x = 0.15;
				trigger.scale.y = 0.1;
				trigger.scale.z = 0.06;
				triggerGroup.add(trigger);

				this.lTriggerB = triggerGroup;
			}

			{ // D PAD
				let dpadGroup = new Three.Group();
				dpadGroup.position.z = 0.075;
				leftGroup.add(dpadGroup);

				let dpadXAxis = new Three.Mesh(cubeGeometry, thumbMaterial);
				dpadXAxis.scale.x = 0.22;
				dpadXAxis.scale.y = 0.075;
				dpadXAxis.scale.z = 0.1;
				dpadGroup.add(dpadXAxis);

				let dpadYAxis = new Three.Mesh(cubeGeometry, thumbMaterial);
				dpadYAxis.scale.x = 0.075;
				dpadYAxis.scale.y = 0.22;
				dpadYAxis.scale.z = 0.1;
				dpadGroup.add(dpadYAxis);

				this.dPad = dpadGroup;
			}

			{ // LEFT THUMB
				let ballJoint = new Three.Mesh(sphereGeometry, thumbMaterial);
				ballJoint.scale.x = 0.1;
				ballJoint.scale.y = 0.1;
				ballJoint.scale.z = 0.1;
				ballJoint.position.x = 0.15;
				ballJoint.position.y = -0.15;
				ballJoint.position.z = 0.1;
				leftGroup.add(ballJoint);

				let leftThumbGroup = new Three.Group();
				leftThumbGroup.scale.x = 1.2;
				leftThumbGroup.scale.y = 1.2;
				leftThumbGroup.scale.z = 1.2;
				leftThumbGroup.position.x = 0.15;
				leftThumbGroup.position.y = -0.15;
				leftThumbGroup.position.z = 0.1;
				leftGroup.add(leftThumbGroup);
				
				let thumbStick = new Three.Mesh(cylinderGeometry, thumbMaterial);
				thumbStick.scale.x = 0.025;
				thumbStick.scale.y = 0.1;
				thumbStick.scale.z = 0.025;
				thumbStick.position.z = 0.01
				thumbStick.rotation.x = Math.PI / 2;
				leftThumbGroup.add(thumbStick);

				let thumbInterface = new Three.Mesh(sphereGeometry, thumbMaterial);
				thumbInterface.scale.x = 0.1;
				thumbInterface.scale.y = 0.1;
				thumbInterface.scale.z = 0.025;
				thumbInterface.position.z = 0.05;
				leftThumbGroup.add(thumbInterface);

				this.lThumbstick = leftThumbGroup;
			}
		}

		{ // Right Group
			let rightSurface = new Three.Mesh(cylinderGeometry, chassisMaterial);
			rightSurface.scale.x = 0.4;
			rightSurface.scale.y = 0.2;
			rightSurface.scale.z = 0.4;
			rightSurface.rotation.x = Math.PI / 2;
			rightGroup.add(rightSurface);

			let rightThumbSocket = new Three.Mesh(cylinderGeometry, chassisMaterial);
			rightThumbSocket.scale.x = 0.2;
			rightThumbSocket.scale.y = 0.205;
			rightThumbSocket.scale.z = 0.2;
			rightThumbSocket.position.x = -0.15;
			rightThumbSocket.position.y = -0.15;
			rightThumbSocket.position.z = 0.005;
			rightThumbSocket.rotation.x = Math.PI / 2;
			rightGroup.add(rightThumbSocket);

			let rightCapsule = new Three.Mesh(capsuleGeometry, chassisMaterial);
			rightCapsule.scale.x = 0.25;
			rightCapsule.scale.y = 0.2;
			rightCapsule.scale.z = 0.25;
			rightCapsule.position.z = -0.1;
			rightCapsule.position.y = -0.24;
			rightCapsule.position.x = 0.1;
			rightCapsule.rotation.x = 0.5;
			rightCapsule.rotation.z = Math.PI / 8;
			rightGroup.add(rightCapsule);

			let button0 = new Three.Mesh(cylinderGeometry, buttonMaterial0);
			button0.scale.x = 0.1;
			button0.scale.y = 0.05;
			button0.scale.z = 0.1;
			button0.position.z = 0.09;
			button0.position.x = 0.0;
			button0.position.y = -0.08;
			button0.rotation.x = Math.PI / 2;
			rightGroup.add(button0);
			let button1 = new Three.Mesh(cylinderGeometry, buttonMaterial1);
			button1.scale.x = 0.1;
			button1.scale.y = 0.05;
			button1.scale.z = 0.1;
			button1.position.z = 0.09;
			button1.position.x = 0.08;
			button1.position.y = 0.0;
			button1.rotation.x = Math.PI / 2;
			rightGroup.add(button1);
			let button2 = new Three.Mesh(cylinderGeometry, buttonMaterial2);
			button2.scale.x = 0.1;
			button2.scale.y = 0.05;
			button2.scale.z = 0.1;
			button2.position.z = 0.09;
			button2.position.x = -0.08;
			button2.position.y = 0.0;
			button2.rotation.x = Math.PI / 2;
			rightGroup.add(button2);
			let button3 = new Three.Mesh(cylinderGeometry, buttonMaterial3);
			button3.scale.x = 0.1;
			button3.scale.y = 0.05;
			button3.scale.z = 0.1;
			button3.position.z = 0.09;
			button3.position.x = 0.0;
			button3.position.y = 0.08;
			button3.rotation.x = Math.PI / 2;
			rightGroup.add(button3);

			this.buttonA = button0;
			this.buttonB = button1;
			this.buttonX = button2;
			this.buttonY = button3;

			{ // Right 1 Trigger
				let triggerGroup = new Three.Group();
				triggerGroup.position.y = 0.16;
				triggerGroup.position.z = 0.05;
				rightGroup.add(triggerGroup);

				let trigger = new Three.Mesh(cubeGeometry, thumbMaterial);
				trigger.position.x = 0.05;
				trigger.scale.x = 0.15;
				trigger.scale.y = 0.1;
				trigger.scale.z = 0.06;
				triggerGroup.add(trigger);

				this.rTriggerF = triggerGroup;
			}
			{ // Right 2 Trigger
				let triggerGroup = new Three.Group();
				triggerGroup.position.y = 0.16;
				triggerGroup.position.z = -0.05;
				rightGroup.add(triggerGroup);

				let trigger = new Three.Mesh(cubeGeometry, thumbMaterial);
				trigger.position.x = 0.05;
				trigger.scale.x = 0.15;
				trigger.scale.y = 0.1;
				trigger.scale.z = 0.06;
				triggerGroup.add(trigger);

				this.rTriggerB = triggerGroup;
			}

			{ // RIGHT THUMB

				let ballJoint = new Three.Mesh(sphereGeometry, thumbMaterial);
				ballJoint.scale.x = 0.1;
				ballJoint.scale.y = 0.1;
				ballJoint.scale.z = 0.1;
				ballJoint.position.x = -0.15;
				ballJoint.position.y = -0.15;
				ballJoint.position.z = 0.1;
				rightGroup.add(ballJoint);
				
				let rightThumbGroup = new Three.Group();
				rightThumbGroup.scale.x = 1.2;
				rightThumbGroup.scale.y = 1.2;
				rightThumbGroup.scale.z = 1.2;
				rightThumbGroup.position.x = -0.15;
				rightThumbGroup.position.y = -0.15;
				rightThumbGroup.position.z = 0.1;
				rightGroup.add(rightThumbGroup);
				
				let thumbStick = new Three.Mesh(cylinderGeometry, thumbMaterial);
				thumbStick.scale.x = 0.025;
				thumbStick.scale.y = 0.1;
				thumbStick.scale.z = 0.025;
				thumbStick.position.z = 0.01
				thumbStick.rotation.x = Math.PI / 2;
				rightThumbGroup.add(thumbStick);

				let thumbInterface = new Three.Mesh(sphereGeometry, thumbMaterial);
				thumbInterface.scale.x = 0.1;
				thumbInterface.scale.y = 0.1;
				thumbInterface.scale.z = 0.025;
				thumbInterface.position.z = 0.05;
				rightThumbGroup.add(thumbInterface);

				this.rThumbstick = rightThumbGroup;
			}
		}

		this.mainGroup.add(centerGroup);
		this.mainGroup.add(leftGroup);
		this.mainGroup.add(rightGroup);
	}

	drawUpdate(dt: number, time: number){
		this.mainGroup.rotation.y = Math.sin(time / 2) / 2;
		this.mainGroup.rotation.x = Math.sin(time / 4.1) / 4;

		// Scan for controllers! Technically this doesn't use the engine lol.
		// That's becasue this use case is somewhat esoteric for demo purposes.
		// The value the engine provides is in connecting the input to the UserController. We just need a scan.

		let lAxisX = 0;
		let lAxisY = 0;
		let rAxisX = 0;
		let rAxisY = 0;

		let btnLThumb = 0;
		let btnRThumb = 0;

		let lBtnF = 0;
		let lBtnB = 0;
		let rBtnF = 0;
		let rBtnB = 0;

		let btnA = 0;
		let btnB = 0;
		let btnX = 0;
		let btnY = 0;
		
		let btnStart = 0;
		let btnSelect = 0;

		let btnUp = 0;
		let btnDown = 0;
		let btnLeft = 0;
		let btnRight = 0;

		if(navigator.getGamepads){
			let gamepads = navigator.getGamepads();
			for(let i = 0; i < gamepads.length; i++){
				let gp = gamepads[i];
				if(gp){
					if(Math.abs(gp.axes[0]) > Math.abs(lAxisX)) lAxisX = gp.axes[0];
					if(Math.abs(gp.axes[1]) > Math.abs(lAxisY)) lAxisY = gp.axes[1];
					if(Math.abs(gp.axes[2]) > Math.abs(rAxisX)) rAxisX = gp.axes[2];
					if(Math.abs(gp.axes[3]) > Math.abs(rAxisY)) rAxisY = gp.axes[3];
					lBtnF |= gp.buttons[4]?.value || 0;
					rBtnF |= gp.buttons[5]?.value || 0;
					lBtnB |= gp.buttons[6]?.value || 0;
					rBtnB |= gp.buttons[7]?.value || 0;

					btnA |= gp.buttons[0]?.value || 0;
					btnB |= gp.buttons[1]?.value || 0;
					btnX |= gp.buttons[2]?.value || 0;
					btnY |= gp.buttons[3]?.value || 0;

					btnLThumb |= gp.buttons[10]?.value || 0;
					btnRThumb |= gp.buttons[11]?.value || 0;

					btnStart |= gp.buttons[9]?.value || 0;
					btnSelect |= gp.buttons[8]?.value || 0;

					btnUp |= gp.buttons[12]?.value || 0;
					btnDown |= gp.buttons[13]?.value || 0;
					btnLeft |= gp.buttons[14]?.value || 0;
					btnRight |= gp.buttons[15]?.value || 0;
				}
			}
		}
		
		this.lThumbstick.rotation.y = lAxisX/2.2;
		this.lThumbstick.rotation.x = lAxisY/2.2;
		this.rThumbstick.rotation.y = rAxisX/2.2;
		this.rThumbstick.rotation.x = rAxisY/2.2;

		this.lThumbstick.position.z = btnLThumb ? 0.075 : 0.1;
		this.rThumbstick.position.z = btnRThumb ? 0.075 : 0.1;

		this.lTriggerF.rotation.z = lBtnF/10;
		this.lTriggerB.rotation.z = lBtnB/10;
		this.rTriggerF.rotation.z = -rBtnF/10;
		this.rTriggerB.rotation.z = -rBtnB/10;

		this.buttonA.position.z = btnA ? 0.076 : 0.09;
		this.buttonB.position.z = btnB ? 0.076 : 0.09;
		this.buttonX.position.z = btnX ? 0.076 : 0.09;
		this.buttonY.position.z = btnY ? 0.076 : 0.09;

		this.startButton.position.z = btnStart ? 0.076 : 0.1;
		this.selectButton.position.z = btnSelect ? 0.076 : 0.1;

		this.dPad.rotation.y = (btnRight - btnLeft) / 10;
		this.dPad.rotation.x = (btnDown - btnUp) / 10;

		if(this.visibility != this.targetVisibility){
			let rate = Math.exp(-dt*4);
			
			this.visibility = this.targetVisibility - (this.targetVisibility-this.visibility) * rate;

			if(Math.abs(this.visibility - this.targetVisibility) < 0.01){
				this.visibility = this.targetVisibility;
			}

			if(this.targetVisibility){
				this.mainGroup.scale.x = this.mainGroup.scale.z = this.visibility;
				this.mainGroup.scale.y = this.targetVisibility ? Math.min(20, 1 / this.visibility) : 1;
				this.mainGroup.rotation.z = 0;
				this.mainGroup.position.x = 0;
				this.mainGroup.position.y = 0;
			}
			else{
				this.mainGroup.scale.x = 1;
				this.mainGroup.scale.y = 1;
				this.mainGroup.rotation.z -= dt * 20;
				this.mainGroup.position.x += dt * 10;
				this.mainGroup.position.y += dt * 5;
			}
		}
	}

	fixedUpdate(){
		if(this.visibility < 0.05 && this.targetVisibility == 0){
			this.gi.destroyObject(this, DeathType.Expired);
		}
	}
}

export default ControllerModel;
