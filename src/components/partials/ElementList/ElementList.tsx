import React, { useState, useEffect, useCallback } from 'react';
import { ElementType } from "../../../services/types/mainTypes";
import Restricted from "../../../services/config/PermissionProvider/Restricted";

type Props = {
    getElements: () => ElementType[];
    addElement: (e: ElementType) => void;
    removeElement: (e: ElementType) => void;
}

const ElementList: React.FunctionComponent<Props> = ({ getElements, addElement, removeElement }) => {
    const [elements, setElements] = useState<ElementType[]>([]);

    useEffect(() => {
        const updatedElements = getElements();
        setElements(updatedElements);
        console.log("Updated elements: ", JSON.stringify(updatedElements));
    }, [getElements]);

    const addRandomElement = useCallback(() => {
        const random = Math.floor(Math.random() * 200);
        const newElement: ElementType = { name: `test-${random}`, price: random, currency: random % 2 === 0 ? "EUR" : "USD" };
        addElement(newElement);
        // setElements((prevElements) => [...prevElements, newElement]);
    }, [addElement]);

    const deleteElement = useCallback((e: ElementType) => {
        removeElement(e);
        // setElements((prevElements) => prevElements.filter(el => el.name !== e.name));
    }, [removeElement]);

    return (
        <div className="container">
            <table className="table table-sm table-hover">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Designação</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Moeda</th>
                        <th scope="col" className="text-right">
                            <Restricted to='add.element'>
                                <button type="button" className="btn btn-primary btn-sm" aria-label="Add element" onClick={addRandomElement}>
                                    <i className="bi-plus-circle" />
                                </button>
                            </Restricted>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {elements.map(e => (
                        <tr key={e.name}>
                            <td>{e.name}</td>
                            <td>{e.price}</td>
                            <td>{e.currency}</td>
                            <td className="text-right">
                                <Restricted to='delete.element'>
                                    <button type="button" className="btn btn-danger btn-sm" aria-label="Delete element" onClick={() => deleteElement(e)}>
                                        <i className="bi bi-trash" />
                                    </button>
                                </Restricted>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ElementList;
