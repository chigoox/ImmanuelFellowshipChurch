import { ref, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";
import { collection, arrayUnion, arrayRemove, increment, deleteDoc, doc, setDoc, getDocs, getDoc, updateDoc, deleteField } from "firebase/firestore";
import { AUTH, DATABASE, STORAGE } from '../config/Firebase';
import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { TabRouter } from "@react-navigation/native";


export function handleInput5(key, value, stateSetter) {
    //const key = target.name
    // const value = target.value


    try {
        stateSetter((old) => {
            return { ...old, [key]: value }
        })
    } catch {
        if (!stateSetter) {
            console.log('need stateSetter')
        }
    }

}




export async function addToDatabase(data, collection, document) {


    const docRef = doc(DATABASE, collection, document)
    await setDoc(docRef, data, { merge: true });

}


async function deleteUserData5(user, data) {
    const userData = doc(DATABASE, 'Users', `${user?.email}${user.uid}`);
    // Remove the 'capital' field from the document
    await updateDoc(userData, {
        [data]: deleteField()
    });

}

async function deleteAdminData5(collection, Doc, field) {
    const userData = doc(DATABASE, collection, Doc);
    // Remove the 'capital' field from the document
    await updateDoc(userData, {
        [field]: deleteField()
    });

}



export const getRand = (max) => { return Math.floor(Math.random() * max) + 1; }





async function fetchDocument(collection, document, setterfunction) {
    const docRef = doc(DATABASE, collection, document);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        setterfunction(docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}


export { fetchDocument, deleteAdminData5, deleteUserData5, fetchData }