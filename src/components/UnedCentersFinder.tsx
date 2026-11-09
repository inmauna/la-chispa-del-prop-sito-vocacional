import React, { useState } from 'react';
import { UNED_CENTERS_HIGHLIGHT } from '../data/unedData';
import { X, Building2, MapPin, Search, Send, CheckCircle2 } from 'lucide-react';

interface UnedCentersFinderProps {
  isOpen: boolean;
  onClose: () => void;
}

const ALL_CENTERS = [
  { city: 'Madrid Sede Central & Sur', address: 'Bravo Murillo 38 / Madrid-Sur (Fuenlabrada, Alcorcón, Getafe, Parla)', region: 'Madrid' },
  { city: 'Madrid Norte & Capital', address: 'Calle Gregorio del Amo 8 / Escuelas Pías de San Fernando', region: 'Madrid' },
  { city: 'Barcelona', address: 'Avinguda de Rio de Janeiro 57 (Nou Barris)', region: 'Cataluña' },
  { city: 'Sevilla', address: 'Calle Jericó s/n (Barrio de San Jerónimo)', region: 'Andalucía' },
  { city: 'Valencia', address: 'Calle Casa de la Misericordia 34', region: 'Comunidad Valenciana' },
  { city: 'A Coruña & Ferrol', address: 'Rúa Pepín Rivero 3, A Coruña', region: 'Galicia' },
  { city: 'Zaragoza', address: 'Calle de San Juan Bosco 7', region: 'Aragón' },
  { city: 'Tenerife', address: 'Calle San Agustín 30, San Cristóbal de La Laguna', region: 'Canarias' },
  { city: 'Las Palmas', address: 'Plaza del Pino s/n, Las Palmas de Gran Canaria', region: 'Canarias' },
  { city: 'Asturias (Gijón)', address: 'Avenida del Jardín Botánico 1345, Gijón', region: 'Asturias' },
  { city: 'Bizkaia (Portugalete/Bilbao)', address: 'Parque Ignacio Ellacuría 2, Portugalete', region: 'País Vasco' },
  { city: 'Granada & Motril', address: 'Calle Periodista Luis Seco de Lucena 6', region: 'Andalucía' },
  { city: 'Mallorca (Palma)', address: 'Camí de la Vileta 8, Palma de Mallorca', region: 'Baleares' },
  { city: 'París (Francia)', address: 'Colegio de España, Cité Internationale Universitaire', region: 'Internacional' },
  { city: 'Londres (Reino Unido)', address: '102 Lancaster Gate, London', region: 'Internacional' },
  { city: 'Bruselas (Bélgica)', address: 'Avenue de Tervueren 168', region: 'Internacional' },
  { city: 'Buenos Aires (Argentina)', address: 'Centro Cultural de España en Buenos Aires', region: 'Internacional' }
];

export const UnedCentersFinder: React.FC<UnedCentersFinderProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactDegree, setContactDegree] = useState<string>('Filosofía');

  if (!isOpen) return null;

  const filteredCenters = ALL_CENTERS.filter((c) => {
    const matchesSearch =
      c.city.toLowerCase().includes(search.toLowerCase()) ||
      c.address.toLowerCase().includes(search.toLowerCase()) ||
      c.region.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || c.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-stone-300 shadow-2xl p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-stone-400 hover:text-stone-900 rounded-md transition-colors cursor-pointer"
          aria-label="Cerrar localizador de centros"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-semibold mb-1">
            <Building2 className="w-4 h-4 text-amber-700" />
            <span>Red de Centros Asociados UNED</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Encuentra tu Centro Asociado más Cercano
          </h3>
          <p className="text-sm text-stone-600 mt-1">
            La UNED cuenta con 61 sedes en todas las comunidades autónomas de España y más de 20 centros en Europa, América y África para tutorías, bibliotecas y exámenes presenciales.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6">
          <div className="sm:col-span-8 relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Buscar por ciudad, centro o dirección..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <div className="sm:col-span-4">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full py-2 px-3 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700 text-stone-800"
            >
              <option value="all">Todas las Regiones</option>
              <option value="Madrid">Comunidad de Madrid</option>
              <option value="Cataluña">Cataluña</option>
              <option value="Andalucía">Andalucía</option>
              <option value="Comunidad Valenciana">Comunidad Valenciana</option>
              <option value="Galicia">Galicia</option>
              <option value="Canarias">Canarias</option>
              <option value="Internacional">Sedes en el Exterior</option>
            </select>
          </div>
        </div>

        {/* Centers List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-64 overflow-y-auto mb-8 pr-1">
          {filteredCenters.map((center, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-stone-50 border border-stone-200 rounded-md hover:border-amber-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-stone-900 text-xs">{center.city}</span>
                <span className="text-[10px] uppercase font-mono text-stone-500 bg-white px-1.5 py-0.5 rounded border border-stone-200">
                  {center.region}
                </span>
              </div>
              <div className="flex items-start gap-1.5 text-xs text-stone-600">
                <MapPin className="w-3.5 h-3.5 text-amber-700 mt-0.5 shrink-0" />
                <span>{center.address}</span>
              </div>
            </div>
          ))}

          {filteredCenters.length === 0 && (
            <div className="col-span-2 text-center py-8 text-xs text-stone-500">
              No se han encontrado sedes con los términos especificados.
            </div>
          )}
        </div>

        {/* Advisory Connection Form */}
        <div className="bg-[#FAF7F2] p-6 rounded-lg border border-stone-300">
          <div className="flex items-center gap-2 mb-2">
            <Send className="w-4 h-4 text-amber-800" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900">
              Solicitar Orientación Académica Personalizada (COIE UNED)
            </h4>
          </div>
          <p className="text-xs text-stone-600 mb-4">
            ¿Tienes dudas sobre convalidaciones, matrícula o compatibilidad laboral? Déjanos tus datos y un orientador del Centro de Orientación y Empleo (COIE) de Humanidades te contactará.
          </p>

          {submitted ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-md text-xs text-emerald-900 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <div>
                <span className="font-semibold block">¡Solicitud recibida con éxito!</span>
                Un orientador de la Facultad de Humanidades se pondrá en contacto contigo en tu correo ({contactEmail}).
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                required
                placeholder="Nombre completo"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-700"
              />
              <input
                type="email"
                required
                placeholder="Correo electrónico"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-700"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-stone-900 hover:bg-amber-950 text-white text-xs font-semibold rounded transition-colors cursor-pointer"
              >
                Solicitar Orientación Gratuita
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
