import DataTable from 'react-data-table-component';
import { useGetProductsQuery } from '../../redux/api';
import { useMemo } from 'react';
import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';

const DataTableProduct = () => {
    const { data = [], isLoading, isError } = useGetProductsQuery({
        page: 1,
        limit: 10
    });

    const columns = useMemo(() => [
        {
            name: 'Image',
            cell: row => (
                <div className="p-2">
                    <img 
                        src={row.image || '/placeholder-image.png'} 
                        alt={row.make} 
                        className="w-12 h-12 object-contain rounded-md border border-gray-200"
                        onError={(e) => {
                            e.target.src = '/placeholder-image.png';
                            e.target.onerror = null;
                        }}
                    />
                </div>
            ),
            width: '100px',
        },
        {
            name: 'Make',
            selector: row => row.make,
            sortable: true,
            cell: row => (
                <span className="font-medium text-gray-800 dark:text-gray-200">
                    {row.make}
                </span>
            ),
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
            cell: row => (
                <div className="text-center">
                    {row.year}
                </div>
            ),
            width: '100px',
        },
        {
            name: 'Color',
            selector: row => row.color,
            cell: row => (
                <div className="flex items-center">
                    <div 
                        className="w-4 h-4 rounded-full mr-2 border border-gray-300"
                        style={{ backgroundColor: row.color.toLowerCase() }}
                    />
                    <span className="capitalize">{row.color}</span>
                </div>
            ),
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true,
            cell: row => (
                <div className="text-right">
                    ${parseFloat(row.price).toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                </div>
            ),
            width: '150px',
        },
        {
            name: 'Actions',
            cell: () => (
                <div className="flex space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                        <FiEye size={18} />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors">
                        <FiEdit size={18} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors">
                        <FiTrash2 size={18} />
                    </button>
                </div>
            ),
            width: '150px',
            ignoreRowClick: true,
        }
    ], []);

    const customStyles = {
        headRow: {
            style: {
                backgroundColor: '#f9fafb',
                fontWeight: 'bold',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderBottomWidth: '1px',
            },
        },
        headCells: {
            style: {
                paddingLeft: '1rem',
                paddingRight: '1rem',
                color: '#374151',
            },
        },
        cells: {
            style: {
                paddingLeft: '1rem',
                paddingRight: '1rem',
            },
        },
        rows: {
            style: {
                backgroundColor: '#ffffff',
                '&:not(:last-of-type)': {
                    borderBottomWidth: '1px',
                    borderBottomColor: '#e5e7eb',
                },
                '&:hover': {
                    backgroundColor: '#f8f9fa',
                },
            },
        },
    };

    if (isError) {
        return (
            <div className="p-8 text-center text-red-500">
                Error loading products. Please try again later.
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">
                    Products Inventory
                </h2>
                <p className="text-sm text-gray-500">
                    Manage your product listings and inventory
                </p>
            </div>
            
            <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
                progressPending={isLoading}
                progressComponent={
                    <div className="p-8 text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading products...</p>
                    </div>
                }
                pagination
                highlightOnHover
                pointerOnHover
                responsive
                noDataComponent={
                    <div className="p-8 text-center text-gray-500">
                        No products found. Add some products to get started.
                    </div>
                }
            />
            
            <div className="p-4 border-t border-gray-200 text-sm text-gray-500">
                Showing {data.length} of {data.length} entries
            </div>
        </div>
    );
};

export default DataTableProduct;