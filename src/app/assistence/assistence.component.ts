import { Component, OnInit } from '@angular/core';
import { Application } from '@nativescript/core';
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { firestore } from '@nativescript/firebase';


@Component({
	selector: 'Assistence',
	templateUrl: './assistence.component.html',
})

export class AssistenceComponent implements OnInit {

	userData: any;

	constructor() {

	}

	ngOnInit() {

	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>Application.getRootView()
		sideDrawer.showDrawer()
	}


	registerAssistence() {
		new BarcodeScanner().scan({
			formats: "QR_CODE,PDF_417",   // Pass in of you want to restrict scanning to certain types
			cancelLabel: "SALIDA. Además, ¡prueba los botones de volumen!", // iOS only, default 'Close'
			cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
			message: "Utilice los botones de volumen para obtener más luz", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
			showFlipCameraButton: true,   // default false
			preferFrontCamera: false,     // default false
			showTorchButton: true,        // default false
			beepOnScan: true,             // Play or Suppress beep on scan (default true)
			fullScreen: true,             // Currently only used on iOS; with iOS 13 modals are no longer shown fullScreen by default, which may be actually preferred. But to use the old fullScreen appearance, set this to 'true'. Default 'false'.
			torchOn: false,               // launch with the flashlight on (default false)
			closeCallback: function () { console.log("Scanner closed"); }, // invoked when the scanner was closed (success or abort)
			resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
			orientation: "portrait",     // Android only, optionally lock the orientation to either "portrait" or "landscape"
			openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
		}).then(
			(result) => {
				if (!result.text) {
					return;
				}

				// const docRef  = doc(db, "miembros", result.text);

				// // Realizar la búsqueda en Firestore
				// const membersCollection = firestore.collection("miembros");
				// const userQuery = membersCollection.where("dni", "==", result.text);

				// userQuery.get().then((querySnapshot) => {
				// 	if (querySnapshot) {
				// 		// Se encontró un usuario con el código QR
				// 		const userDoc = querySnapshot.docs[0];
				// 		this.userData = userDoc.data();

				// 		// Mostrar los datos en un cuadro de diálogo
				// 		this.showUserDialog();
				// 	} else {
				// 		// No se encontró un usuario
				// 		confirm("Miembro no encontrado.", "Aceptar");
				// 	}
				// }).catch((error) => {
				// 	console.log("Error al buscar en Firestore:", error);
				// });
			},
			(error) => {
				console.log("No scan: " + error);
			}
		);
	}

	// showUserDialog() {
	// 	confirm({
	// 		title: "Datos del Usuario",
	// 		message: `Nombre: ${this.userData.name}`,
	// 		okButtonText: "Confirmar",
	// 		cancelButtonText: "Cancelar",
	// 	}).then((result) => {
	// 		if (result) {
	// 			// El usuario confirmó
	// 			// Realiza aquí cualquier acción adicional
	// 		} else {
	// 			// El usuario canceló
	// 			this.userData = null; // Limpia los datos del usuario
	// 		}
	// 	});
	// }
}