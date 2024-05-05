import React, {useEffect} from 'react';
import {listUsers} from '../../../services/userService';

export default function ListMembers() {
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        listUsers()
        .then((res) => {
            console.log(res);
        setUsers(res);
        });
    }, []);

  return (
    <>
      <div className="mt-24">
        <div className="w-full">
            <div className="rounded-lg h-full mb-3">
                <div className="bg-gray-100 p-4">
                    <div className="w-full flex">
                        <div className="w-full">
                            <h3 className="card-title">Les vétérants</h3>
                            <div className="flex">
                                <div className="w-[75%] mt-1">
                                    <input id="input_numero_facture" type="text" className="w-full border rounded-md px-4 py-2" placeholder="ID, Email, Nom" />
                                </div>
                                <div className="w-[25%] mt-1 ml-4">
                                    <button id="btn-search" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Rechercher</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 overflow-y-auto">
                    <table id="table" className="w-full border border-gray-300 rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-2">ID</th>
                                <th className="py-2">Nom</th>
                                <th className="py-2">Email</th>
                                <th className="text-center py-2">Date de demande</th>
                                <th className="text-center py-2">Date d'acceptation</th>
                                <th className="text-center py-2">Statut</th>
                            </tr>
                        </thead>
                        <tbody id="tbody-container">
                            {/* {
                                users && users?.map((user) => (
                                    <tr>
                                        <td className="py-2">{user.id}</td>
                                        <td className="py-2">{user.name}</td>
                                        <td className="py-2">{user.email}</td>
                                        <td className="text-center py-2">{user.created_at}</td>
                                        <td className="text-center py-2">{user.updated_at}</td>
                                        <td className="text-center py-2">
                                            {
                                                user.status === 0 ? <span className="bg-yellow-500 text-white px-2 py-1 rounded-full">En attente</span> : <span className="bg-green-500 text-white px-2 py-1 rounded-full">Accepté</span>
                                            }
                                        </td>
                                    </tr>
                            ))
                            }   */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}